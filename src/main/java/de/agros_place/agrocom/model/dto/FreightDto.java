package de.agros_place.agrocom.model.dto;

import lombok.Data;

@Data
public class FreightDto {
  private Integer volume;
  private String start;
  private String destination;
}
