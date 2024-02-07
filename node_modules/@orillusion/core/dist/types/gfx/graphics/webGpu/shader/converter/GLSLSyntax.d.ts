import { GLSLLexer } from './GLSLLexer';
import { StatementNode } from './StatementNode';
/**
 * @internal
 * GLSL code parser
 * @group GFX
 */
export declare class GLSLSyntax {
    private _lexer;
    private _rootNode;
    constructor(input: GLSLLexer);
    get lexer(): GLSLLexer;
    private parse;
    private parseStatement;
    private skipToken;
    private peekToken;
    private getNextToken;
    get ASTRoot(): StatementNode;
}
