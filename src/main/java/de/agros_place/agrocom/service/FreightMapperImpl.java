package de.agros_place.agrocom.service;

import org.springframework.stereotype.Service;

import de.agros_place.agrocom.model.dto.FreightDto;
import de.agros_place.agrocom.model.entity.Freight;

@Service
public class FreightMapperImpl implements FreightMapper {
  public Freight mapDtoToEntity(FreightDto dto) {
    return new Freight().setStart(dto.getStart())
      .setDestination(dto.getDestination())
      .setVolume(dto.getVolume());
  }
}
