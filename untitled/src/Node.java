public class Node {
    Node left = null;
    Node right = null;
    String value = null;

    public Node(String temp){
        this.value = temp;
    }

    public void setRight(Node temp){
        this.right = temp;
    }

    public void setLeft(Node temp){
        this.left = temp;
    }

}
