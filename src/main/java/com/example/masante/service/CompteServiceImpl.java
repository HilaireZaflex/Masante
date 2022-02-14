package com.example.masante.service;

import com.example.masante.entity.Compte;
import com.example.masante.entity.Medecin;
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


    @Override
    public Compte addMedecin(Medecin medecin) {
        return compteRepository.save(medecin);
    }
}
