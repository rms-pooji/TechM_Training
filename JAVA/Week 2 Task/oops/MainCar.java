package org.example.assignment.oopeg;

import java.util.ArrayList;

public class MainCar {
    public static void main(String[] args){
        ArrayList<Car> cars= new ArrayList<>();

        cars.add(new Car("Toyota", "Camry", 2022));
        cars.add(new ElectricCar("Tesla", "Model S", 2023, 350));
        cars.add(new ElectricCar("Nissan", "Leaf", 2021, 240);
        cars.add(new Car("Ford", "Mustang", 2022));

        for(Car c: cars){
            c.startEngine();
        }

    }
}
