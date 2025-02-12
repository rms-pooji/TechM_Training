package multithreading;
import java.io.*;

class Employee implements Serializable {
    private int Eno;
    private final String Ename;  // Marked as final
    private transient String email;  // Marked as transient to exclude it from serialization

    // Constructor
    public Employee(int Eno, String Ename, String email) {
        this.Eno = Eno;
        this.Ename = Ename;
        this.email = email;
    }

    // Getters
    public int getEno() {
        return Eno;
    }

    public String getEname() {
        return Ename;
    }

    public String getEmail() {
        return email;
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an Employee object (this is where the Employee class is used)
        Employee emp = new Employee(01, "Johnny depp", "johnny.depp@example.com");

        // Serialize the object (excluding the email field)
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("employee.ser"))) {
            out.writeObject(emp);  // Serialize the Employee object
            System.out.println("Employee object serialized successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialize the object and display the values
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("employee.ser"))) {
            Employee deserializedEmp = (Employee) in.readObject();  // Deserialize the Employee object
            System.out.println("Deserialized Employee:");
            System.out.println("Eno: " + deserializedEmp.getEno());
            System.out.println("Ename: " + deserializedEmp.getEname());
            System.out.println("Email: " + deserializedEmp.getEmail());  // This will be null because it's transient
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
