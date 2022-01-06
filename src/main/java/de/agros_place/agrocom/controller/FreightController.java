package de.agros_place.agrocom.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import de.agros_place.agrocom.model.dto.FreightDto;
import de.agros_place.agrocom.model.entity.Freight;

public interface FreightController {
  Freight createFreight(FreightDto freight);

  Freight updateFreight(Long id, FreightDto freight);

  Freight getFreight(Long id);

  List<Freight> getAllFreights();

  ResponseEntity<HttpStatus> deleteFreight(Long id);
}
