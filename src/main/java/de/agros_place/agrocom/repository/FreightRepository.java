package de.agros_place.agrocom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.agros_place.agrocom.model.entity.Freight;

@Repository
public interface FreightRepository extends JpaRepository<Freight, Long> {
}
