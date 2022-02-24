package com.example.masante.conseil.entity;

import com.example.masante.compte.entity.Medecin;
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
public class Conseil {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;


    @ManyToOne
    private Utilisateur utilisateur;
    @ManyToOne
    private Medecin medecin;

}
