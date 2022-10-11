import java.util.ArrayList;

public class NAStack implements IQueuable {
    Node start = null;
    int size = 0;
    @Override
    public String[] enqueue(String value) {
        if (this.start == null){
            this.start = new Node(value);
        }else{
            while (this.start.right != null){
                this.start = this.start.right;
            }
            this.start.right = new Node(value);
            this.start.right.left = this.start;
            this.start = this.start.right;
        }
        this.size += 1;
        while (this.start.left != null){
            this.start = this.start.left;
        }
        return getQueue();
    }

    @Override
    public String dequeue() {
        try{
            while (this.start.right != null){
                this.start = this.start.right;
            }
            String res = this.start.value;
            if (this.start != null && this.start.left != null){
                this.start = this.start.left;
                this.start.right = null;
            }
            while (this.start.left != null){
                this.start = this.start.left;
            }
            this.size -= 1;
            return res;
        } catch(NullPointerException e){
            return "Stack is empty";
        }
    }

    @Override
    public String[] getQueue() {
        String[] name = new String[this.size];
        Node res = this.start;
        for (int i = 0 ; i < this.size ; i ++){
            name[i] = res.value;
            res = res.right;
        }
        return name;
    }

    @Override
    public int size() {
        return this.size;
    }
}
