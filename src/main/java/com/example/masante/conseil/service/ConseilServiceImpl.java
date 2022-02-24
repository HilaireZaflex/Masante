package com.example.masante.conseil.service;

import com.example.masante.conseil.entity.Conseil;
import com.example.masante.conseil.repository.ConseilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConseilServiceImpl implements ConseilService {
    @Autowired
    ConseilRepository conseilRepository;

    // Ajout de conseil
    @Override
    public String ajouterConseil(Conseil conseil) {
        this.conseilRepository.save(conseil);
        return "Conseil ajouter";
    }

    // mise en jour conseil
    @Override
    public Conseil updateConseil(Long id, Conseil conseil) {
        return conseilRepository.save(conseil);
    }

    //Afficher tout les conseil
    @Override
    public List<Conseil> getAllConseil() {
        return conseilRepository.findAll();
    }

    //Afficher conseil by Id
    @Override
    public Conseil getConseilById(Long id) {
        return conseilRepository.findById(id).get();
    }

    //Suprimer un conseil
    @Override
    public String deleteConseil(Long id) {
        this.conseilRepository.deleteById(id);
        return "Conseil suprimer dans base de donnee";
    }
}
