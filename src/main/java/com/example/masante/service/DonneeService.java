package com.example.masante.service;


import com.example.masante.entity.Donnee;

import java.util.List;

public interface DonneeService {
    String ajouterDonnee (Donnee donnee);     // methode Creation de compte
    Donnee updateDonnee (Long id, Donnee donnee);       // methode mise a jour (modifier) compte
    List<Donnee> getAllDonnee();        // methode afficher tout les comptes
    public Donnee getDonneeById (Long id); // methode afficher donnee par id
    public String deleteDonnee(Long id); //Suprimer un compte de la base
}
