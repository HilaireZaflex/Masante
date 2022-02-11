package com.example.masante.service;


import com.example.masante.entity.Donnee;

import java.util.List;

public interface DonneeService {
    String ajouterDonnee (Donnee donnee);     // Ajout de donnee
    Donnee updateDonnee (Long id, Donnee donnee);       // methode mise a jour (modifier) donnee
    List<Donnee> getAllDonnee();        // methode afficher tout les donnee
    public Donnee getDonneeById (Long id); // methode afficher donnee par id
    public String deleteDonnee(Long id); //Suprimer un donnee dans la base
}
