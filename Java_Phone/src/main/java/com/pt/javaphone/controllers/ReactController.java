package com.pt.javaphone.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController
{
	@RequestMapping({"/"})
	public String React()
	{
		return "forward:/index.html";
	}
}