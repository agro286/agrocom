package de.agros_place.agrocom.service;

import de.agros_place.agrocom.model.dto.FreightDto;
import de.agros_place.agrocom.model.entity.Freight;

public interface FreightMapper {
  Freight mapDtoToEntity(FreightDto dto);
}
