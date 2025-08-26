import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersListTable } from './team-members-list-table';

describe('TeamMembersListTable', () => {
  let component: TeamMembersListTable;
  let fixture: ComponentFixture<TeamMembersListTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMembersListTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMembersListTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
