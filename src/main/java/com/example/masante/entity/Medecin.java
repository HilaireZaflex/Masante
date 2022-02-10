package com.example.masante.entity;

import com.example.masante.enumeration.Specialite;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorValue("MEDECIN")
public class Medecin extends Compte {
    private Specialite specialite;

    @ManyToOne
    private Admin admin;
}
