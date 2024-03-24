import { Column, Entity } from "typeorm";

@Entity("reviews", { schema: "airlinelebanon" })
export class Reviews {
  @Column("int", { primary: true, name: "Reviewid" })
  reviewid: number;

  @Column("int", { name: "Userid", nullable: true })
  userid: number | null;

  @Column("varchar", { name: "UserMessage", nullable: true, length: 600 })
  userMessage: string | null;

  @Column("int", { name: "Stars", nullable: true })
  stars: number | null;

  @Column("varchar", { name: "username", nullable: true, length: 50 })
  username: string | null;
}
