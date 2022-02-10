package com.example.masante.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
@DiscriminatorValue("UTILISATEUR")
public class Utilisateur extends Compte {

    @ManyToOne
    private Admin admin;
}
