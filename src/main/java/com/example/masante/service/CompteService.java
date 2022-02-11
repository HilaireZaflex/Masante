package com.example.masante.service;

import com.example.masante.entity.Compte;
import com.example.masante.enumeration.Etat;

import java.util.List;

public interface CompteService {
    String CreerCompte (Compte compte);     // methode Creation de compte
    Compte updateCompte (Long id, Compte compte);       // methode mise a jour (modifier) compte
    List<Compte> getAllCompte();        // methode afficher tout les comptes
    public String deleteCompte(Long id); //Suprimer un compte de la base
    public Compte modifierMotDePasse (long id, Compte compte);

    //---------------------requete personnaliser----------------------------
    public Compte connexion(Integer mobile, Integer motDePasse); //Authentification
    List<Compte>getAllCompteActive();       //methode recuperer tout les comptes dont l'etat est Active
    List<Compte>getAllCompteInactive();      //methode recuperer tout les comptes dont l'etat est Inactive
    Compte getCompteByIdAndEtat (Long id, Etat etat);       //methode recuperer les comptes par id et par etat
    String disableCompte (Long id);     //methode pour desactiver un compte
    String enableCompte (Long id);        //methode pour activer un compte

}
