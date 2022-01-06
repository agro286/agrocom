package de.agros_place.agrocom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.agros_place.agrocom.model.dto.FreightDto;
import de.agros_place.agrocom.model.entity.Freight;
import de.agros_place.agrocom.service.FreightMapper;
import de.agros_place.agrocom.service.FreightService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("rest/freight")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class FreightControllerImpl implements FreightController {
  private final FreightService freightService;
  private final FreightMapper freightMapper;

  @PostMapping
  public Freight createFreight(@RequestBody FreightDto dto) {
    return freightService.createFreight(freightMapper.mapDtoToEntity(dto));
  }

  @PutMapping("{id}")
  public Freight updateFreight(@PathVariable Long id, @RequestBody FreightDto dto) {
    return freightService.updateFreight(id, freightMapper.mapDtoToEntity(dto));
  }

  @GetMapping("{id}")
  public Freight getFreight(@PathVariable Long id) {
    return freightService.getFreight(id);
  }

  @GetMapping
  public List<Freight> getAllFreights() {
    return freightService.getAllFreights();
  }

  @DeleteMapping("{id}")
  public ResponseEntity<HttpStatus> deleteFreight(@PathVariable Long id) {
    freightService.deleteFreight(id);
    return ResponseEntity.ok().build();
  }
}
