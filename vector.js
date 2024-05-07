class Vector extends Array {
    constructor(x, y) {
        super(x, y);
    }
    // vector operations
    scalar(A) {
        for (let [i, coordinate] of Object.entries(this)) {
            this[i] = coordinate * A;
        }
        return this;
    }

    addition(v, add) {
        if (add === 'sub') {
            for (let [i, coordinate] of Object.entries(this)) {
                this[i] = coordinate - v[i];
            }
            return this;
        } else if(add === undefined || add === 'add') {
            for (let [i, coordinate] of Object.entries(this)) {
                this[i] = coordinate + v[i];
            }
            return this;
        }
    }

    dot(v) {
        let m, mSum = 0;
        for (let [i, coordinate] of Object.entries(this)) {
            m = coordinate * v[i];
            mSum += m;
        }
        return mSum;
    }
    norm(decimal) {
        if (decimal === undefined) {
            decimal = 2;
        }
        let factor = 1 / this.distance();
        let normalised = this.scalar(factor);
        return normalised;
    }
    // geometrical
    distance(p, decimal) {
        if (p === undefined) {
            p = new Vector(0, 0);
        }
        if (decimal === undefined) {
            decimal = 2;
        }
        let r, rSum = 0;
        for (let [i, coordinate] of Object.entries(this)) {
            let r = Math.pow(coordinate - p[i], 2);
            rSum += r;
        }
        return Math.sqrt(rSum).toFixed(decimal);
    }

    angle(v, decimal) {
        if (v === undefined) {
            v = new Vector(1, 1);
        }
        if (decimal === undefined) {
            decimal = 0;
        }
        let partial = Math.atan((this[1] - v[1]) / (this[0] - v[0])) * (180 / Math.PI).toFixed(decimal);
        // quadrant check
        if (this[0] > v[0] & this[1] < v[1]) {
            // II
            return partial - 180;
        } else if (this[0] > v[0] & this[1] > v[1]) {
            // III
            return partial + 180;
        } else if (this[0] < v[0] & this[1] > v[1]) {
            // IV
            return partial - 360;
        } else {
            // I
            return partial;
        }
    }
}

export default Vector;
