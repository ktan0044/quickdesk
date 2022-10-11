public class MainClass {
    public static void main(String[] args) {
        IQueuable stck = new NAQueue();
        System.out.println(stck.dequeue());
        stck.enqueue("First");
        stck.enqueue("Second");
        System.out.println("I got dequeue : " + stck.dequeue());
        stck.enqueue("Third");
        stck.enqueue("Fourth");
        System.out.println("I got dequeue : " + stck.dequeue());
        stck.enqueue("Fifth");
        String [] printOnes = stck.enqueue("Fifth");
        for (int i = 0 ; i < printOnes.length ; i ++){
            System.out.println(printOnes[i]);
        }
    }
}
