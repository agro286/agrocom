package de.agros_place.agrocom.controller;

import io.swagger.v3.oas.annotations.Hidden;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientforwardControllerImpl {
    @Hidden
    @GetMapping(value = "/**/{path:[^.]*}")
    public String forward() {
        return "forward:/";
    }
}
