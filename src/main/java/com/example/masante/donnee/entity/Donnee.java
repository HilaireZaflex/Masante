package com.example.masante.donnee.entity;

import com.example.masante.maladie.entity.Maladie;
import com.example.masante.compte.entity.Utilisateur;
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

    @Column
    private Integer valeurA;

    @Column
    private Integer valeurB;

    @Column(nullable = true)
    private Float valeurC;

    @Column
    private Integer unite;

    @Column
    String maladies;


    @Column
    private String resultat;

    @ManyToOne
    private Maladie maladie;

    @ManyToOne
    private Utilisateur utilisateur;

}
