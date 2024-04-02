class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next ?? null;
    }
}
class Contenido {
    constructor(titulo, autor, disponibilidad, codigo) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidad = disponibilidad;
        this.codigo = codigo;
    }
}
class LinkedList {
    head = null;
    size = 0;
    add(value) {
        if (!this.size) {

            this.head = new Node(value);
        } else {
            this.head = new Node(value, this.head)
        }
        this.size++;
    }
    get(titulo) {
        let current = this.head;
        while (current) {
            if (current.value.titulo.startsWith(titulo)) {
                return current.value;
            }
            current = current.next;
        }

    }
    change(titulo) {
        let current = this.head;
        while (current) {
            if (current.value.titulo.startsWith(titulo)) {
                current.value.disponibilidad = !current.value.disponibilidad;
            }
            current = current.next;
        }

    }
}

let librerias = new LinkedList();
librerias.add(new Contenido("Jurassic Park", "Michael Crichton", true, 4120));
librerias.add(new Contenido("Riqueza de las Naciones", "Adam Smith", true, 1243));
librerias.add(new Contenido("El Señor de los Anillos", "J. R. R. Tolkien", true, 2085));
librerias.add(new Contenido("Necronomicon", "H.P. Lovecraft", true, 3075));
console.log(librerias.get("Jurassic Park"));
librerias.change("Jurassic Park")
console.log(librerias.get("Riqueza de las Naciones"));
console.log(librerias.get("Jurassic Park"));
console.log(librerias.get("El Señor de los Anillos"));
console.log(librerias.get("Necronomicon"));
console.log(librerias);