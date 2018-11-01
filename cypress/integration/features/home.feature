Feature: Homepage Feature
  I want to open the homepage

  Scenario: Opening the homepage
    Given I open the "AngularMaterial" homepage
    Then the page heading should be "Home"

  Scenario: Opening the sidenav
    Given I open the "AngularMaterial" homepage
    When I click on the sidenav toggle button
    Then the sidenav should appear

  Scenario: Submitting data to the form
    Given I open the "AngularMaterial" homepage
    When I enter the "home/user" data to the form and submit
    Then the matching "home/user" data should appear below
