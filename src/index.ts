class Inputer {
  value: any
  error: boolean = false
  errorMessage: string = ''

  Required(message?: string): this {
    if(!this.value) {
      this.error = true
      this.errorMessage = !message ? `Required` : `${message}`
    }
    return this
  }

  OnlyText(message?: string): this {
    if(/\d/.test(this.value)) {
      this.error = true
      this.errorMessage = !message ? `Cannot Contain Numbers` : `${message}`
    }
    return this
  }

  OnlyNumber(message?: string): this {
    if(!/^\d*\.?\d*$/.test(this.value)) {
      this.error = true
      this.errorMessage = !message ? `Cannot Contain Non-Numeric` : `${message}`
    }
    return this
  }

}

class Texter extends Inputer {
  constructor(value?: string) {
    super()
    this.value = value;
  }

  Max(compare: number, message?: string): this {
    if(this.value.length > compare) {
      this.error = true
      console.log(message)
      this.errorMessage = !message ? `Max Length ${compare} Exceeded` : `${message}`
    }
    return this
  }

  Min(compare: number, message?: string): this {
    if(this.value.length < compare) {
      this.error = true
      this.errorMessage = !message ? `Min Length ${compare} Required` : `${message}`
    }
    return this
  }
}


class Emailer extends Inputer {
  constructor(value?: string) {
    super()
    this.value = value;
  }

  Validate(message?: string): this {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(this.value)) {
      this.error = true
      this.errorMessage = !message ? `Invalid Email` : `${message}`
    }
    return this
  }
}

class Phoner extends Inputer {
  constructor(value: string) {
    super()
    this.value = value;
  }

  Validate(message?: string): this {
    if(this.value.length != 10) {
      this.error = true
      this.errorMessage = !message ? `Invalid Phone Number` : `${message}`
    }
    return this
  }
}


class Numberer extends Inputer {
  constructor(value?: string) {
    super()
    this.value = value;
  }

  Validate(message?: string): this {
    return this.OnlyNumber()
  }

  Max(compare: number, message?: string): this {
    if(this.value > compare) {
      this.error = true
      this.errorMessage = !message ? `Max Value ${compare} Exceeded` : `${message}`
    }
    return this
  }

  Min(compare: number, message?: string): this {
    if(this.value < compare) {
      this.error = true
      this.errorMessage = !message ? `Min Value ${compare}` : `${message}`
    }
    return this
  }
}

module.exports = { Texter, Emailer, Phoner, Numberer }