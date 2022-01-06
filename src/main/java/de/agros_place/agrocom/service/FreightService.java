package de.agros_place.agrocom.service;

import java.util.List;

import de.agros_place.agrocom.model.entity.Freight;

public interface FreightService {
  Freight createFreight(Freight freight);

  Freight updateFreight(Long id, Freight freight);

  Freight getFreight(Long id);

  List<Freight> getAllFreights();

  void deleteFreight(Long id);
}
