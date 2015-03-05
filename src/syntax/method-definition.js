import BaseSyntax from './base.js';
import FunctionExpression from './function-expression.js';
import Identifier from './identifier.js';

/**
 * The class to define the MethodDefinition syntax
 *
 * @class MethodDefinition
 */
export default
class MethodDefinition extends BaseSyntax {

  /**
   * Create a method for a class
   *
   * @constructor
   * @param {ClassDeclaration} _class
   */
    constructor(_class) {

    super('MethodDefinition');

    this.key = new Identifier();
    this.class = _class;
    this.static = false;
    this.computed = false;
    this.kind = '';
    this.value = new FunctionExpression();
  }

  set name(name) {
    this.key.name = name;
  }

  get name() {
    return this.key.name;
  }

  set body(body) {
    this.value.body = body;
  }

  get body() {
    return this.value.body;
  }

  set params(params) {
    this.value.params = params;
  }

  get params() {
    return this.value.params;
  }

}