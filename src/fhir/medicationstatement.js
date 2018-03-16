/* eslint-disable
    constructor-super,
    no-constant-condition,
    no-this-before-super,
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

// Copyright (c) 2014 The MITRE Corporation
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice, this
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice,
//       this list of conditions and the following disclaimer in the documentation
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to
//       endorse or promote products derived from this software without specific
//       prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
const DT = require('../cql-datatypes');
const CORE = require('./core');
let { Element } = CORE;
let { Resource } = CORE;
const { Timing } = CORE;
const { Period } = CORE;
const { Parameters } = CORE;
const { Coding } = CORE;
({ Resource } = CORE);
const { Range } = CORE;
const { Quantity } = CORE;
const { Attachment } = CORE;
const { BackboneElement } = CORE;
const { DomainResource } = CORE;
const { ContactPoint } = CORE;
const { ElementDefinition } = CORE;
const { Extension } = CORE;
const { HumanName } = CORE;
const { Address } = CORE;
const { Ratio } = CORE;
const { SampledData } = CORE;
const { Reference } = CORE;
const { CodeableConcept } = CORE;
const { Identifier } = CORE;
const { Narrative } = CORE;
({ Element } = CORE);

/**
Embedded class
@class MedicationStatementDosageComponent
@exports  MedicationStatementDosageComponent as MedicationStatementDosageComponent
*/
class MedicationStatementDosageComponent extends BackboneElement {
  constructor(json) {
    super(json);
    this.json = json;
  }
  /**
  The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
  @returns {Timing}
  */
  schedule() { if (this.json['schedule']) { return new Timing(this.json['schedule']); } }

  /**
  If set to true or if specified as a CodeableConcept, indicates that the medication is only taken when needed within the specified schedule rather than at every scheduled dose.  If a CodeableConcept is present, it indicates the pre-condition for taking the Medication.
  @returns {Array} an array of {@link boolean} objects
  */
  asNeededBoolean() { return this.json['asNeededBoolean']; }
  /**
  If set to true or if specified as a CodeableConcept, indicates that the medication is only taken when needed within the specified schedule rather than at every scheduled dose.  If a CodeableConcept is present, it indicates the pre-condition for taking the Medication.
  @returns {CodeableConcept}
  */
  asNeededCodeableConcept() { if (this.json['asNeededCodeableConcept']) { return new CodeableConcept(this.json['asNeededCodeableConcept']); } }

  /**
  A coded specification of the anatomic site where the medication first enters the body.
  @returns {CodeableConcept}
  */
  site() { if (this.json['site']) { return new CodeableConcept(this.json['site']); } }

  /**
  A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
  @returns {CodeableConcept}
  */
  route() { if (this.json['route']) { return new CodeableConcept(this.json['route']); } }

  /**
  A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  Examples:  Slow Push; Deep IV.

Terminologies used often pre-coordinate this term with the route and or form of administration.
  @returns {CodeableConcept}
  */
  method() { if (this.json['method']) { return new CodeableConcept(this.json['method']); } }

  /**
  The amount of therapeutic or other substance given at one administration event.
  @returns {Quantity}
  */
  quantity() { if (this.json['quantity']) { return new Quantity(this.json['quantity']); } }

  /**
  Identifies the speed with which the substance is introduced into the subject. Typically the rate for an infusion. 200ml in 2 hours.
  @returns {Ratio}
  */
  rate() { if (this.json['rate']) { return new Ratio(this.json['rate']); } }

  /**
  The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time. E.g. 1000mg in 24 hours.
  @returns {Ratio}
  */
  maxDosePerPeriod() { if (this.json['maxDosePerPeriod']) { return new Ratio(this.json['maxDosePerPeriod']); } }
}

/**
A record of medication being taken by a patient, or that the medication has been given to a patient where the record is the result of a report from the patient or another clinician.
@class MedicationStatement
@exports MedicationStatement as MedicationStatement
*/
class MedicationStatement extends DomainResource {
  constructor(json) {
    super(json);
    this.json = json;
  }
  /**
  External identifier - FHIR will generate its own internal IDs (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
  @returns {Array} an array of {@link Identifier} objects
  */
  identifier() {
    if (this.json['identifier']) {
      return this.json['identifier'].map((item) =>
        new Identifier(item));
    }
  }

  /**
  The person or animal who is /was taking the medication.
  @returns {Reference}
  */
  patient() { if (this.json['patient']) { return new Reference(this.json['patient']); } }

  /**
  Set this to true if the record is saying that the medication was NOT taken.
  @returns {Array} an array of {@link boolean} objects
  */
  wasNotGiven() { return this.json['wasNotGiven']; }

  /**
  A code indicating why the medication was not taken.
  @returns {Array} an array of {@link CodeableConcept} objects
  */
  reasonNotGiven() {
    if (this.json['reasonNotGiven']) {
      return this.json['reasonNotGiven'].map((item) =>
        new CodeableConcept(item));
    }
  }

  /**
  The interval of time during which it is being asserted that the patient was taking the medication.
  @returns {Period}
  */
  whenGiven() { if (this.json['whenGiven']) { return new Period(this.json['whenGiven']); } }

  /**
  Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
  @returns {Reference}
  */
  medication() { if (this.json['medication']) { return new Reference(this.json['medication']); } }

  /**
  An identifier or a link to a resource that identifies a device used in administering the medication to the patient.
  @returns {Array} an array of {@link Reference} objects
  */
  device() {
    if (this.json['device']) {
      return this.json['device'].map((item) =>
        new Reference(item));
    }
  }

  /**
  Indicates how the medication is/was used by the patient.
  @returns {Array} an array of {@link MedicationStatementDosageComponent} objects
  */
  dosage() {
    if (this.json['dosage']) {
      return this.json['dosage'].map((item) =>
        new MedicationStatementDosageComponent(item));
    }
  }
}




module.exports.MedicationStatement = MedicationStatement;