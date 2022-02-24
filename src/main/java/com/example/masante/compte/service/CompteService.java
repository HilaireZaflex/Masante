package com.example.masante.compte.service;

import com.example.masante.compte.entity.Admin;
import com.example.masante.compte.entity.Compte;
import com.example.masante.compte.entity.Medecin;
import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.enumeration.Etat;

import java.util.List;

public interface CompteService {
    String CreerCompte (Compte compte);     // methode Creation de compte
    public Compte creerMedecin (Medecin medecin); // Creer un medecin
    public Compte creerUser (Utilisateur utilisateur);// creer un user
    Compte updateCompte (Long id, Compte compte);       // methode mise a jour (modifier) compte
    List<Compte> getAllCompte();        // methode afficher tout les comptes
    public Compte getCompteById (Long id); // methode pour recuperer les compte par id
    public String deleteCompte(Long id); //Suprimer un compte de la base
    public Compte modifierMotDePasse (long id, Compte compte);


    //---------------------requete personnaliser----------------------------
    public Compte connexion(Integer mobile, Integer motDePasse); //Authentification
    public Admin logIn(Integer mobile, Integer motDePasse); //Authentification Admin
    List<Compte>getAllCompteActive();       //methode recuperer tout les comptes dont l'etat est Active
    List<Compte>getAllCompteInactive();      //methode recuperer tout les comptes dont l'etat est Inactive
    Compte getCompteByIdAndEtat (Long id, Etat etat);       //methode recuperer les comptes par id et par etat
    String disableCompte (Long id);     //methode pour desactiver un compte
    String enableCompte (Long id);        //methode pour activer un compte


        /**-----------Medecin---------------*/
    List<Medecin> getAllMedecin();        // methode afficher tout les medecins
    List<Medecin>getAllMedecinActive();       //methode recuperer tout les Medecin dont l'etat est Active
    List<Medecin>getAllMedecinInactive();      //methode recuperer tout les Medecin dont l'etat est Inactive
    Medecin getMedecinByIdAndEtat (Long id, Etat etat);       //methode recuperer les Medecin par id et par etat

        /**-----------Utilisateur---------------*/
    List<Utilisateur> getAllUtilisateur();        // methode afficher tout les utilisateurs
    List<Utilisateur>getAllUtilisateurActive();       //methode recuperer tout les Utilisateur dont l'etat est Active
    List<Utilisateur>getAllUtilisateurInactive();      //methode recuperer tout les Utilisateur dont l'etat est Inactive
    Utilisateur getUtilisateurByIdAndEtat (Long id, Etat etat);       //methode recuperer les Utilisateur par id et par etat

}
