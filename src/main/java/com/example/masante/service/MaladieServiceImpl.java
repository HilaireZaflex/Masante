package com.example.masante.service;

import com.example.masante.entity.Compte;
import com.example.masante.entity.Maladie;
import com.example.masante.enumeration.Etat;
import com.example.masante.repository.MaladieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaladieServiceImpl implements MaladieService{
    @Autowired
    MaladieRepository maladieRepository;

    //ajouter un maladie
    @Override
    public String ajouter(Maladie maladie) {
        this.maladieRepository.save(maladie);
        return "maladie ajouter";
    }

    //mis a jour (modifier) maladie
    @Override
    public Maladie updateMaladie(Long id, Maladie maladie) {
        return maladieRepository.save(maladie);
    }

    //Afficher tout Maladie
    @Override
    public List<Maladie> getAllMaladie() {
        return maladieRepository.findAll();
    }

    //Suprimer maladie
    @Override
    public String deleteMaladie(Long id) {
        this.maladieRepository.deleteById(id);
        return "Maladie suprimer de la base de donnee";
    }


    /**--------------------------------requete personnaliser----------------------------*/


    //recuperer  les maladies dont l'etat est Active
    @Override
    public List<Maladie> getAllMaladieActive() {
        return maladieRepository.getAllMaladieActive();
    }

    //recuperer les maladies dont l'etat est Inactive
    @Override
    public List<Maladie> getAllMaladieInactive() {
        return maladieRepository.getAllMaladieInactive();
    }

    //recuperer les maladies par id et par etat
    @Override
    public Maladie getMaladieByIdAndEtat(Long id, Etat etat) {
        return maladieRepository.getMaladieByIdAndEtat(id, etat);
    }

    //desactiver un compte
    @Override
    public String disableMaladie(Long id) {
        this.maladieRepository.disableMaladie(id);
       return "Compte DESACTIVER avec success !!!";
    }

    //activer un compte
    @Override
    public String enableMaladie(Long id) {
        this.maladieRepository.enableMaladie(id);
        return "Compte ACTIVER avec success !!!";
    }
}
