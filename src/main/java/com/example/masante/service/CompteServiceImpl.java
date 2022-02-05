package com.example.masante.service;

import com.example.masante.entity.Compte;
import com.example.masante.repository.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
}
