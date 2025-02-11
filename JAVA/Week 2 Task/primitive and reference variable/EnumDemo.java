import java.util.EnumSet;

public class EnumDemo {

    public static void checkHoliday(DaysOfWeek day) {
        if (day == DaysOfWeek.SATURDAY || day == DaysOfWeek.SUNDAY) {
            System.out.println(day + ": Holiday");
        } else {
            System.out.println(day + ": Not Holiday");
        }
    }

    public static void main(String[] args) {
        checkHoliday(DaysOfWeek.MONDAY);
        checkHoliday(DaysOfWeek.SATURDAY);
        checkHoliday(DaysOfWeek.SUNDAY);
    }
}
