package com.example.masante.service;

import com.example.masante.entity.Compte;

import java.util.List;

public interface CompteService {
    String CreerCompte (Compte compte); // methode Creation de compte
    Compte updateCompte (Long id, Compte compte); // methode mise a jour (modifier) compte
    List<Compte> getAllCompte();// methode afficher tout les comptes
}
