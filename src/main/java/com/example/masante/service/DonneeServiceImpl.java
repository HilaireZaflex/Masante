package com.example.masante.service;

import com.example.masante.entity.Donnee;
import com.example.masante.repository.DonneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonneeServiceImpl implements DonneeService {

    @Autowired
    DonneeRepository donneeRepository;

    // Ajout de donnee
    @Override
    public String ajouterDonnee(Donnee donnee) {
        this.donneeRepository.save(donnee);
        return "Donnee ajouter avec success";
    }

    //mis a jour (modifier) Donnee
    @Override
    public Donnee updateDonnee(Long id, Donnee donnee) {
        return donneeRepository.save(donnee);
    }

    //Afficher tout les donnee
    @Override
    public List<Donnee> getAllDonnee() {
        return donneeRepository.findAll();
    }

    //Afficher donnee by Id
    @Override
    public Donnee getDonneeById(Long id) {
        return donneeRepository.findById(id).get();
    }

    //Suprimer un donnee
    @Override
    public String deleteDonnee(Long id) {
        this.donneeRepository.deleteById(id);
        return "Donnee suprimer dans base de donnee";
    }
}
