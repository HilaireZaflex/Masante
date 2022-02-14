package com.example.masante.service;

import com.example.masante.entity.Compte;
import com.example.masante.entity.Medecin;
import com.example.masante.entity.Utilisateur;
import com.example.masante.enumeration.Etat;
import com.example.masante.repository.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompteServiceImpl implements CompteService{
    @Autowired
    CompteRepository compteRepository;

    //Creer un compte
    @Override
    public String CreerCompte(Compte compte) {
        this.compteRepository.save(compte);
        return "Compte créer avec success";
    }
    //mis a jour (modifier) compte
    @Override
    public Compte updateCompte(Long id, Compte compte) {
        return compteRepository.save(compte);
    }

    //Afficher tout les compte
    @Override
    public List<Compte> getAllCompte() {
        return compteRepository.findAll();
    }

    //Suprimer un compte
    @Override
    public String deleteCompte(Long id) {
        this.compteRepository.deleteById(id);
        return "Compte suprimer de la base de donnee";
    }

    //Modifier mot de passe
    @Override
    public Compte modifierMotDePasse(long id, Compte compte) {
        Compte compt = compteRepository.findById(id).get();
        compt.setMotDePasse(compte.getMotDePasse());
        return compteRepository.save(compt);
        }


    //--------------------------------requete personnaliser----------------------------
    //Connexion compte
    @Override
    public Compte connexion(Integer mobile, Integer motDePasse) {
        Optional <Compte> connecter = compteRepository.findByMobileAndMotDePasse(mobile,motDePasse);
        return connecter.get();
    }

    //recuperer tout les comptes dont l'etat est Active
    @Override
    public List<Compte> getAllCompteActive() {
        return compteRepository.getAllCompteActive();
    }

    //recuperer tout les comptes dont l'etat est Inactive
    @Override
    public List<Compte> getAllCompteInactive() {
        return compteRepository.getAllCompteInactive();
    }

    //recuperer les comptes par id et par etat
    @Override
    public Compte getCompteByIdAndEtat(Long id, Etat etat) {
        return compteRepository.getCompteByIdAndEtat(id, etat);
    }

    //desactiver un compte
    @Override
    public String disableCompte(Long id) {
        this.compteRepository.disableCompte(id);
        return "Compte DESACTIVER avec success !!!";
    }

    //activer un compte
    @Override
    public String enableCompte(Long id) {
        this.compteRepository.enableCompte(id);
        return "Compte ACTIVER avec success !!!";
    }

        /**-----------Medecin---------------*/
    //Afficher tout les Medecins
    @Override
    public List<Medecin> getAllMedecin() {
        return compteRepository.getAllMedecin();
    }

    @Override
    public List<Medecin> getAllMedecinActive() {
        return compteRepository.getAllMedecinActive();
    }

    @Override
    public List<Medecin> getAllMedecinInactive() {
        return compteRepository.getAllMedecinInactive();
    }

    @Override
    public Medecin getMedecinByIdAndEtat(Long id, Etat etat) {
        return compteRepository.getMedecinByIdAndEtat(id, etat);
    }

    /**-----------Utilisateur---------------*/

    //Afficher tout les Utilisateur
    @Override
    public List<Utilisateur> getAllUtilisateur() {
        return compteRepository.getAllUtilisateur();
    }

    @Override
    public List<Utilisateur> getAllUtilisateurActive() {
        return compteRepository.getAllUtilisateurActive();
    }

    @Override
    public List<Utilisateur> getAllUtilisateurInactive() {
        return compteRepository.getAllUtilisateurInactive();
    }

    @Override
    public Utilisateur getUtilisateurByIdAndEtat(Long id, Etat etat) {
        return compteRepository.getUtilisateurByIdAndEtat(id, etat);
    }
}
