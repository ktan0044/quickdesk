import java.util.ArrayList;
import java.util.Arrays;

public class Stack implements IQueuable{

    ArrayList<String> storage = new ArrayList<>();

    @Override
    public String[] enqueue(String value) {
        this.storage.add(value);
        return getQueue();
    }

    @Override
    public String dequeue() {
        try{
            return this.storage.remove(this.storage.size() - 1);
        }catch(IndexOutOfBoundsException e){
            return "Stack is empty";
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
