package de.agros_place.agrocom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientforwardControllerImpl {
  @GetMapping(value = "/**/{path:[^.]*}")
  public String forward() {
    return "forward:/";
  }
}
