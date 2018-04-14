package cn.springmvc.controller;

import java.io.File;  
import java.io.FileOutputStream;  
import java.io.IOException;  
import java.io.InputStream;  
import java.io.OutputStream;  
import java.util.List;  
  



import javax.servlet.ServletException;   
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
  



import org.apache.commons.fileupload.FileItem;  
import org.apache.commons.fileupload.FileUploadException;  
import org.apache.commons.fileupload.disk.DiskFileItemFactory;  
import org.apache.commons.fileupload.servlet.ServletFileUpload; 
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping; 


@Controller
@RequestMapping("/")
public class FileUpLoadController extends HttpServlet {  
    private static final long serialVersionUID = 1L;  
    
    @RequestMapping("fileupload")
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
        request.setCharacterEncoding("utf-8");  
        response.setCharacterEncoding("utf-8");  
        //1、创建一个DiskFileItemFactory工厂  
        DiskFileItemFactory factory = new DiskFileItemFactory();  
        //2、创建一个文件上传解析器  
        ServletFileUpload upload = new ServletFileUpload(factory);  
        //解决上传文件名的中文乱码  
        upload.setHeaderEncoding("UTF-8");   
        factory.setSizeThreshold(1024 * 500);//设置内存的临界值为500K  
        File linshi = new File("E:\\infoimage");//当超过500K的时候，存到一个临时文件夹中  
        factory.setRepository(linshi);  
        upload.setSizeMax(1024 * 1024 * 5);//设置上传的文件总的大小不能超过5M  
        try {  
            // 1. 得到 FileItem 的集合 items  
            List<FileItem> /* FileItem */items = upload.parseRequest(request);  
  
            // 2. 遍历 items:  
            for (FileItem item : items) {  
                // 若是一个一般的表单域, 打印信息  
                if (item.isFormField()) {  
                    String name = item.getFieldName();  
                    String value = item.getString("utf-8");    
                    System.out.println(name + ": " + value);         
                }   
                else {  
                    String fileName = item.getName();  
                    long sizeInBytes = item.getSize();  
                    //System.out.println(fileName);  
                    //System.out.println(sizeInBytes);  
  
                    InputStream in = item.getInputStream();  
                    byte[] buffer = new byte[1024];  
                    int len = 0;    
                    fileName = "E:\\PMS\\WorkSpace\\files\\" + fileName;//文件最终上传的位置                     
                    String filepath="{\"filepath\":"+fileName+"}";
                    response.getWriter().write(filepath);                    
                    System.out.println(fileName);  //输出文件名                                      
                    OutputStream out = new FileOutputStream(fileName);    
                    while ((len = in.read(buffer)) != -1) {  
                        out.write(buffer, 0, len);  
                    }    
                    out.close();  
                    in.close();  
                }  
            }  
  
        } catch (FileUploadException e) {  
            e.printStackTrace();  
        }   
    }  
}  
