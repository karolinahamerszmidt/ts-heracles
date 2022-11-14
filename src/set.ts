// a TDD implementation of a Set called MySet

export class MySet {
    private value: Array<number>;

    constructor(initialValues?: Array<number>) {
        this.value = new Array();
        initialValues?.forEach((initialValue) => {
            if (this.value.includes(initialValue) === false) {
                this.value.push(initialValue)
            }
        })
    }

    /**
     * returns the size of the set
     */
    public get size (): number {
        return this.value.length;
    }

    /**
     * checks if a value is contained in a Set
     * @param value a value to check
     */
    public has (value: number): boolean {
        return this.value.includes(value)
    }

    /**
     * add value
     */
    public add (value: number): void {
        if (this.value.includes(value)) return; 
        
        this.value.push(value)
    
    }
    /**
    * delete value
    */
     public delete (value: number): void {
        this.value = this.value.filter( (element) => element !== value)
        
    }

     /**
    * delete value
    */
   public clear () : void {
    this.value = []
   }
}
