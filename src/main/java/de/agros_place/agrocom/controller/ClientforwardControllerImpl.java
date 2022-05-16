package de.agros_place.agrocom.controller;

import springfox.documentation.annotations.ApiIgnore;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientforwardControllerImpl {
  @ApiIgnore
  @GetMapping(value = "/**/{path:[^.]*}")
  public String forward() {
    return "forward:/";
  }
}
