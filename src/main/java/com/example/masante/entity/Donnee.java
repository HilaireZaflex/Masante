package com.example.masante.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Donnee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer valeur;

    @Column(nullable = false)
    private String resultat;

    @ManyToOne
    private Maladie maladie;

    @ManyToOne
    private Utilisateur utilisateur;
}
