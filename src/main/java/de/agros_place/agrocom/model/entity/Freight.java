package de.agros_place.agrocom.model.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

@Data
@Entity
@Table(name = Freight.TABLE_NAME)
@EntityListeners(AuditingEntityListener.class)
public class Freight {
  public static final String TABLE_NAME = "freight";

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;

  private Integer volume;
  private String start;
  private String destination;

  @CreatedDate
  private LocalDateTime creationDate;
  @LastModifiedDate
  private LocalDateTime lastModified;
}
