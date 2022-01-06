package de.agros_place.agrocom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.agros_place.agrocom.repository.FreightRepository;
import de.agros_place.agrocom.exception.ResourceNotFoundException;
import de.agros_place.agrocom.model.entity.Freight;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class FreightServiceImpl implements FreightService {
  private final FreightRepository freightRepository;

  public Freight createFreight(final Freight freight) {
    return freightRepository.save(freight);
  }

  public Freight updateFreight(final Long id, final Freight freight) {
    return freightRepository.save(
      getFreight(id)
        .setStart(freight.getStart())
        .setDestination(freight.getDestination())
        .setVolume(freight.getVolume()));
  }

  public Freight getFreight(final Long id) {
    return freightRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Element with id " + id + " not found"));
  }

  public List<Freight> getAllFreights() {
    return freightRepository.findAll();
  }

  public void deleteFreight(final Long id) {
    freightRepository.delete(getFreight(id));
  }
}
