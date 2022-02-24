package com.example.masante.conseil.service;



import com.example.masante.conseil.entity.Conseil;

import java.util.List;

public interface ConseilService {
    String ajouterConseil (Conseil conseil);     // Ajout de Conseil
    Conseil updateConseil (Long id, Conseil conseil);       // methode mise a jour (modifier) Conseil
    List<Conseil> getAllConseil();        // methode afficher tout les Conseil
    public Conseil getConseilById (Long id); // methode afficher Conseil par id
    public String deleteConseil(Long id); //Suprimer une Conseil dans la base
}
