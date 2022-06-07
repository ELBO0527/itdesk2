package com.example.hibia.controller.exception;

import com.example.hibia.advice.exception.CAuthenticationEntryPointException;
import com.example.hibia.model.response.CommonResult;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
=======
>>>>>>> main
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/exception")
<<<<<<< HEAD
@CrossOrigin(origins = "*")
=======
>>>>>>> main
public class ExceptionController {

    @GetMapping(value = "/entrypoint")
    public CommonResult entryPointException(){
        throw new CAuthenticationEntryPointException();
    }

    @GetMapping(value = "/accessdenied")
    public CommonResult accessdeniedException(){
        throw new AccessDeniedException("");
    }
}
