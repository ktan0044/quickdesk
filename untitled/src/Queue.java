import java.util.ArrayList;

public class Queue implements IQueuable{
    ArrayList<String> storage = new ArrayList<>();

    @Override
    public String[] enqueue(String value) {
        this.storage.add(value);
        return getQueue();
    }

    @Override
    public String dequeue() {
        try{
            return this.storage.remove(0);
        }catch(IndexOutOfBoundsException e){
            return "Queue is empty";
        }
    }

    @Override
    public String[] getQueue() {
        String[] res = new String[this.storage.size()];
        return this.storage.toArray(res);
    }

    @Override
    public int size() {
        return this.storage.size();
    }
}
