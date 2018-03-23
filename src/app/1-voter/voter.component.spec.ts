import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {VoterComponent} from './voter.component';

describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let component: VoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    // fixture.debugElement;
    // fixture.nativeElement;
  });

  it('should render totalVotes properly', () => {
    component.othersVote = 10;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('11');
  });

  it('should highlight upVote button if myUpvote equals 1', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increment totalVotes when click upVote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.totalVotes).toBe(1);
  });
});
