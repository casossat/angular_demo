export class TravelDestiny {
  private selected: boolean
  constructor(public name: string, public imgURL: string) { 
    this.selected = false
  }

  is_selected(): boolean {
    return this.selected
  }

  set_selected(s:boolean) {
    this.selected = s
  }
}